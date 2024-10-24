import { FormItem, FormLabel, FormControl, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import DatePickerFormElement from "./DatePickerFormElement.tsx";



function FormFieldComponent({ label, type, options = [], field } : any) {
    return (
        <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
                <>
                    {type === "select" && (
                        <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder={`Select ${label}`} />
                            </SelectTrigger>
                            <SelectContent>
                                {options?.map((option :string) => (
                                    <SelectItem key={option} value={option}>
                                        {option}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )}
                    {type === "textarea" && <Textarea {...field} />}
                    {type === "date" && <DatePickerFormElement {...field} />}
                    {type === "input" && (
                        <Input {...field} />
                    )}
                </>
            </FormControl>
            <FormMessage />
        </FormItem>
    );
}

export default FormFieldComponent;
