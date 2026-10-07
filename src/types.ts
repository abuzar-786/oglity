export interface NavigationItem {
  label: string;
  href: string;
  badge?: string;
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
  technicalCode?: string;
  isLime?: boolean;
}

export interface ProblemItem {
  number: string;
  title: string;
  explanation: string;
  impact?: string;
  category: string;
}

export interface AQBCStepItem {
  number: string;
  title: string;
  technology: string;
  description: string;
  technicalMetric?: string;
  isTerminal?: boolean;
}

export interface ComparisonItem {
  traditional: string;
  aqbc: string;
  dimension?: string;
}

export interface CaseStudyItem {
  caseFile: string;
  client: string;
  serviceCategory: string;
  systemDeployed: string;
  resultData: string;
  status: string;
  marketContext?: string;
}

export interface ProofMetricItem {
  value: string;
  label: string;
  code: string;
  context: string;
  isLime?: boolean;
}

export interface GrowthAuditFormData {
  studioName: string;
  ownerName: string;
  phone: string;
  city: string;
  averagePackagePrice: string;
  currentMonthlyLeads: string;
}
