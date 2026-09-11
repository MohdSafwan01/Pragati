import type { PortfolioSummary, StateRiskSummary, InterventionPriority, RiskAssessment } from '@/lib/types';
import { mockPortfolioSummary, mockStateRiskSummaries } from '@/data/mock/portfolio';
import { mockInterventions } from '@/data/mock/alerts-interventions';
import { mockRiskAssessments } from '@/data/mock/projects';

export async function getPortfolioSummary(): Promise<PortfolioSummary> {
  await new Promise(r => setTimeout(r, 150));
  return { ...mockPortfolioSummary };
}

export async function getStateRiskSummaries(): Promise<StateRiskSummary[]> {
  await new Promise(r => setTimeout(r, 100));
  return [...mockStateRiskSummaries];
}

export async function getInterventionQueue(): Promise<InterventionPriority[]> {
  await new Promise(r => setTimeout(r, 100));
  return [...mockInterventions].sort((a, b) => b.priorityScore - a.priorityScore);
}

export async function getHighRiskAssessments(): Promise<RiskAssessment[]> {
  await new Promise(r => setTimeout(r, 100));
  return mockRiskAssessments.filter(r => r.riskTier === 'high' || r.riskTier === 'critical').sort((a, b) => b.riskScore - a.riskScore);
}
