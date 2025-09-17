import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const LeadCaptureForm = () => {
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    marketingConsent: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("אנא מלא את כל השדות");
      return;
    }
    if (!formData.marketingConsent) {
      toast.error("יש לאשר קבלת דיוור");
      return;
    }

    try {
      const response = await fetch('https://hook.eu2.make.com/jov57xf5gmhbwia4lp3uaie8nkip2cd4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          marketingConsent: formData.marketingConsent
        })
      });

      if (response.ok) {
        setIsThankYouOpen(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          marketingConsent: false
        });
      } else {
        toast.error("אירעה שגיאה, אנא נסה שוב");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("אירעה שגיאה, אנא נסה שוב");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      marketingConsent: checked
    }));
  };

  return (
    <>
    <Card className="w-full max-w-md mx-auto bg-card/90 backdrop-blur-sm border-healthSecondary/20 shadow-[var(--health-glow)]">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold bg-gradient-to-l from-healthPrimary to-healthSecondary bg-clip-text text-transparent">
          קבל את המדריך החינמי
        </CardTitle>
        <p className="text-muted-foreground text-sm">
          השאר פרטים וקבל את המדריך הכי מקיף לאיזון סוכר בחגים
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              name="name"
              placeholder="שם מלא"
              value={formData.name}
              onChange={handleChange}
              className="text-right border-healthLight focus:border-healthPrimary focus:ring-healthPrimary/20"
              dir="rtl"
            />
          </div>
          <div>
            <Input
              name="email"
              type="email"
              placeholder="כתובת אימייל"
              value={formData.email}
              onChange={handleChange}
              className="text-right border-healthLight focus:border-healthPrimary focus:ring-healthPrimary/20"
              dir="rtl"
            />
          </div>
          <div>
            <Input
              name="phone"
              type="tel"
              placeholder="מספר טלפון"
              value={formData.phone}
              onChange={handleChange}
              className="text-right border-healthLight focus:border-healthPrimary focus:ring-healthPrimary/20"
              dir="rtl"
            />
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <Checkbox 
              id="marketing-consent" 
              checked={formData.marketingConsent}
              onCheckedChange={handleCheckboxChange}
              className="border-healthPrimary data-[state=checked]:bg-healthPrimary"
            />
            <Label htmlFor="marketing-consent" className="text-sm text-muted-foreground text-right flex-1">
              אני מאשר/ת קבלת דיוור שיווקי ועדכונים  
            </Label>
          </div>
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-l from-healthPrimary to-healthSecondary hover:opacity-90 text-white font-semibold py-3 shadow-[var(--health-glow)] hover:shadow-lg transition-all duration-300"
          >
            קבל את המדריך עכשיו 🎯
          </Button>
        </form>
      </CardContent>
    </Card>
    <Dialog open={isThankYouOpen} onOpenChange={setIsThankYouOpen}>
      <DialogContent className="sm:max-w-md w-[90%] max-w-[350px]" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-l from-healthPrimary to-healthSecondary bg-clip-text text-transparent">
            תודה רבה!
          </DialogTitle>
    
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 mt-4">

          <Button 
            onClick={() => window.open('https://drive.google.com/file/d/1lTMDYa1OxVnI6WrAeThXgjDPXP6Vlff9/view?usp=sharing', '_blank')}
            className="w-full bg-gradient-to-l from-healthPrimary to-healthSecondary hover:opacity-90 text-white font-semibold py-6 shadow-[var(--health-glow)] hover:shadow-lg transition-all duration-300"
          >
            לחץ כאן לצפייה במדריך 📚
          </Button>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default LeadCaptureForm;