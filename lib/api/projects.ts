import type { Project, RiskAssessment, ProjectMonthSnapshot, PredictiveSignal, Evidence, Alert, PeerBenchmark, InterventionPriority, ProjectFilters } from '@/lib/types';
import { mockProjects, mockRiskAssessments, mockProjectTrajectories } from '@/data/mock/projects';
import { mockSignals, mockEvidence } from '@/data/mock/signals-evidence';
import { mockAlerts, mockBenchmarks, mockInterventions } from '@/data/mock/alerts-interventions';

export async function getProjects(filters?: ProjectFilters): Promise<Project[]> {
  await new Promise(r => setTimeout(r, 100));
  let projects = [...mockProjects];
  if (filters) {
    if (filters.ministry) projects = projects.filter(p => p.ministry === filters.ministry);
    if (filters.sector) projects = projects.filter(p => p.sector === filters.sector);
    if (filters.state) projects = projects.filter(p => p.state === filters.state);
    if (filters.status) projects = projects.filter(p => p.status === filters.status);
    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      projects = projects.filter(p => p.name.toLowerCase().includes(q) || p.ministry.toLowerCase().includes(q) || p.sector.toLowerCase().includes(q));
    }
    if (filters.riskTier) {
      const tier = filters.riskTier;
      const idsWithTier = mockRiskAssessments.filter(r => r.riskTier === tier).map(r => r.projectId);
      projects = projects.filter(p => idsWithTier.includes(p.id));
    }
    if (filters.priorityLevel) {
      const level = filters.priorityLevel;
      const idsWithLevel = mockInterventions.filter(i => i.priorityLevel === level).map(i => i.projectId);
      projects = projects.filter(p => idsWithLevel.includes(p.id));
    }
    if (filters.minCostCrore !== undefined) projects = projects.filter(p => p.revisedCostCrore >= filters.minCostCrore!);
    if (filters.maxCostCrore !== undefined) projects = projects.filter(p => p.revisedCostCrore <= filters.maxCostCrore!);
    if (filters.minProgress !== undefined) projects = projects.filter(p => p.physicalProgress >= filters.minProgress!);
    if (filters.maxProgress !== undefined) projects = projects.filter(p => p.physicalProgress <= filters.maxProgress!);
  }
  return projects;
}

export async function getProject(id: string): Promise<Project | undefined> {
  await new Promise(r => setTimeout(r, 50));
  return mockProjects.find(p => p.id === id);
}

export async function getProjectRisk(projectId: string): Promise<RiskAssessment | undefined> {
  await new Promise(r => setTimeout(r, 50));
  return mockRiskAssessments.find(r => r.projectId === projectId);
}

export async function getAllRiskAssessments(): Promise<RiskAssessment[]> {
  await new Promise(r => setTimeout(r, 100));
  return [...mockRiskAssessments];
}

export async function getProjectHistory(projectId: string): Promise<ProjectMonthSnapshot[]> {
  await new Promise(r => setTimeout(r, 100));
  return mockProjectTrajectories[projectId] || [];
}

export async function getProjectSignals(projectId: string): Promise<PredictiveSignal[]> {
  await new Promise(r => setTimeout(r, 80));
  return mockSignals[projectId] || [];
}

export async function getProjectEvidence(projectId: string): Promise<Evidence[]> {
  await new Promise(r => setTimeout(r, 80));
  return mockEvidence[projectId] || [];
}

export async function getProjectAlerts(projectId: string): Promise<Alert[]> {
  await new Promise(r => setTimeout(r, 80));
  return mockAlerts.filter(a => a.projectId === projectId);
}

export async function getProjectBenchmark(projectId: string): Promise<PeerBenchmark | undefined> {
  await new Promise(r => setTimeout(r, 50));
  return mockBenchmarks[projectId];
}

export async function getProjectIntervention(projectId: string): Promise<InterventionPriority | undefined> {
  await new Promise(r => setTimeout(r, 50));
  return mockInterventions.find(i => i.projectId === projectId);
}

export async function getAllAlerts(): Promise<Alert[]> {
  await new Promise(r => setTimeout(r, 60));
  return [...mockAlerts];
}

export async function getAllProjectTrajectories(): Promise<Record<string, ProjectMonthSnapshot[]>> {
  await new Promise(r => setTimeout(r, 60));
  return { ...mockProjectTrajectories };
}

