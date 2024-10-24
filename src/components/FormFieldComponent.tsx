import { FormItem, FormLabel, FormControl, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import DatePickerFormElement from "./DatePickerFormElement.tsx";

interface FormFieldProps {
  label: string;
  type: string;
  options?: string[];
}

function FormFieldComponent({ label, type, options, ...props }: FormFieldProps) {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        {type === "select" && (
          <Select {...props}>
            <SelectTrigger>
              <SelectValue placeholder={`Select ${label}`} />
            </SelectTrigger>
            <SelectContent>
              {options?.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        {type === "textarea" && <Textarea {...props} />}
        {type === "date" && <DatePickerFormElement label={label} {...props} />}
        {type === "input" && <Input {...props} />}
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}

export default FormFieldComponent;
