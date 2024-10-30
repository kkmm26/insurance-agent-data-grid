import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/providers/LanguageProvider";

function LanguageToggle() {
    const { toggleLanguage } = useLanguage();
    return (
        <Tabs defaultValue="en" onValueChange={toggleLanguage}>
            <TabsList>
                <TabsTrigger value="en">EN</TabsTrigger>
                <TabsTrigger value="mm">မြန်မာ</TabsTrigger>
            </TabsList>
        </Tabs>
    );
}

export default LanguageToggle;
