import { Input } from "@/components/ui/input";

function PhoneInput({ field }: { field: any }) {
    return (
        <div className="flex items-center gap-2">
            <span className="text-muted-foreground">09 </span>
            <span className="text-muted-foreground">-</span>
            <Input
                type="text"
                pattern="[0-9]*"
                inputMode="numeric"
                {...field}
                onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '');
                    e.target.value = value;
                    field.onChange(e);
                }}
                minLength={9}
                maxLength={9}
            />
        </div>
    );
}

export default PhoneInput;
