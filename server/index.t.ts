interface HttpException extends Error {
  status: number;
}

type Status = 'Scheduled' | 'Delivering' | 'Ended';

interface TargetAudience {
  languages: string[];
  genders: string[];
  age_range: [number, number];
  locations: string[];
  interests: string[];
}

interface Creatives {
  header: string;
  description: string;
  url: string;
  image: string;
}

interface Insights {
  impressions: number;
  clicks: number;
  website_visits: number;
  nanos_score: number;
  cost_per_click: number;
  click_through_rate: number;
  advanced_kpi_1: number;
  advanced_kpi_2: number;
}

interface Platform {
  status: Status;
  total_budget: number;
  start_date: number;
  end_date: number;
  target_audience: TargetAudience;
  creatives: Creatives;
  insights: Insights;
}

type PlatformKey = 'instagram' | 'facebook' | 'google';

type Platforms = {
  [key in PlatformKey]: Platform;
};

interface Campaign {
  id: number;
  name: string;
  goal: string;
  total_budget: number;
  status: Status;
  platforms: Platforms;
}

type CampaignSummary = Pick<
  Campaign,
  'id' | 'name' | 'goal' | 'total_budget' | 'status'
>;

interface Schema {
  campaigns: Campaign[];
}
