/* eslint-disable react/jsx-props-no-spreading */
import toast from "react-hot-toast";
import { each } from "lodash";
import { useForm } from "react-hook-form";
import { RedoOutlined } from "@ant-design/icons";
import Typography, {
  TypographyType,
} from "../../typography/typography-element";
import FlexWrapper from "../flex-wrapper";
import Button from "../button";

type FormData = {
  [keyof: string]: boolean;
};

type FormProperties = {
  formDefaultValues: Record<string, number>;
  formFields: Array<Record<string, string>>;
  onApply: (values: Record<string, number>) => void;
  onReset: () => void;
};

/**
 * Form is built to be totally modular. You can write any new wrapper
 * component and pass down the form fields and default values to it.
 *
 * It accepts two additional callback function for when you hit
 * apply and reset buttons.
 */
function SearchSettingsForm({
  formDefaultValues,
  formFields,
  onApply,
  onReset,
}: FormProperties) {
  const { register, handleSubmit, setValue } = useForm<FormData>();

  const validateAndParse = (data: FormData) => {
    let isValid = false;
    const values: Record<string, number> = {};

    each(data, (value: boolean, key: string) => {
      if (value) {
        isValid = true;
        values[key] = 1;
      }
    });

    return {
      isValid,
      values,
    };
  };

  const onFormSubmit = (data: FormData) => {
    const validation = validateAndParse(data);
    const { isValid, values } = validation;

    if (isValid) {
      onApply(values);
      toast.success("Settings have been applied");
    } else {
      toast.error("Please select at least one option");
    }
  };

  const resetOptions = () => {
    each(formFields, (value: Record<string, string>) => {
      setValue(value.name, false);
    });
    onReset();
    toast.success("Changes reset");
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex w-full flex-col"
    >
      {formFields.map((field) => {
        return (
          <FlexWrapper key={field.name} classes="mb-5">
            <label
              className="flex w-full justify-between pl-[0.15rem] hover:cursor-pointer"
              htmlFor={field.name}
            >
              <Typography component={TypographyType.SPAN} classes="pr-10">
                {field.description}
              </Typography>
              <input
                {...register(field.name)}
                defaultChecked={formDefaultValues[field.name] === 1}
                className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-red-400 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-red-400 checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-red-400 checked:focus:bg-red-400 checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-red-400 dark:checked:after:bg-red-400 dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                type="checkbox"
                role="switch"
                id={field.name}
              />
            </label>
          </FlexWrapper>
        );
      })}
      <FlexWrapper justifyContent="between" alignItems="center" classes="mt-12">
        <Button className="" onClick={resetOptions}>
          <RedoOutlined style={{ paddingRight: "8px" }} />
          Reset
        </Button>
        <Button type="submit" className="">
          Apply
        </Button>
      </FlexWrapper>
    </form>
  );
}

export default SearchSettingsForm;
