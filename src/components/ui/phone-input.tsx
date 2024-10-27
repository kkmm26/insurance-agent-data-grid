import { Input } from "@/components/ui/input";

function PhoneInput({ field }: { field: any }) {
    return (
        <div className="flex items-center gap-2">
            <span className="text-muted-foreground">09 </span>
            <span className="text-muted-foreground">-</span>
            <Input
                type="tel"
                {...field}
                onKeyDown={(e) => {
                    if (isNaN(Number(e.key)) && e.key !== "Backspace") {
                        e.preventDefault();
                    }
                }}
                minLength={9}
                maxLength={9}
            />
        </div>
    );
}

export default PhoneInput;
