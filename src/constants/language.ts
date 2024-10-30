export type Language = 'en' | 'mm';

export const translations = {
  en: {
    'add-policy': 'Add New Policy',
    'delete-policy': 'Delete Policy',
    'total-commission': 'Total Commission',
    'this-year': 'This Year',
    'this-month': 'This Month',
    'filter': 'Filter',
    'policy-status': 'Policy Status',
    'expired-within': 'Expired Within',
    'commission-status': 'Commission Status',
    'columns': 'Columns',
    'search-client-names': 'Search Client Names',
    'policy-type': 'Policy Type',
    'company-name': 'Company Name',
    'reset-all': 'Reset All',
  },
  mm: {
    'add-policy': 'ပေါ်လစီ အသစ်ထည့်ပါ',
    'delete-policy': 'ဖျက်ပါ',
    'total-commission': 'စုစုပေါင်း ကော်မရှင်',
    'this-year': 'ဒီနှစ်',
    'this-month': 'ဒီလ',
    'filter': 'စစ်ပါ',
    'policy-status': 'ပေါ်လစီ အခြေအနေ',
    'expired-within': 'သက်တမ်းကုန်သောအချိန်',
    'commission-status': 'ကော်မရှင် အခြေအနေ',
    'columns': 'ခေါင်းစီး',
    'search-client-names': 'အမည်စာရင်းများကို ရှာဖွေပါ',
    'reset-all': 'အားလုံးပြန်ပြင်ပါ',
    'policy-type': 'ပေါ်လစီ အမျိုးအစား',
    'company-name': 'ကုမ္ပဏီ အမည်',
  },
} as const;

export type TranslationKey = keyof typeof translations.en; 