/**
 * Whole plan interfaces.
 */

import {
  BufferLocation, HighlightType,
  ViewMode, Orientation,
} from '@/enums';

export interface IPlan {
  id: string;
  name: string;
  content: any;
  query: string;
  createdOn: Date;
  planStats: IPlanStats;
  formattedQuery?: string;
  ctes: any[];
  isAnalyze: boolean;
  isVerbose: boolean;
}

export interface IViewOptions {
  menuHidden: boolean,
  showHighlightBar: boolean,
  showPlanStats: boolean,
  highlightType: HighlightType,
  viewMode: ViewMode,
  orientation: Orientation,
  showDiagram: boolean,
  diagramWidth: number,
}

export interface IViewOptionsAnyOne {
  menuHidden?: boolean,
  showHighlightBar?: boolean,
  showPlanStats?: boolean,
  highlightType?: HighlightType,
  viewMode?: ViewMode,
  orientation?: Orientation,
  showDiagram?: boolean,
  diagramWidth?: number,
}

export interface ITrigger {
  'Trigger Name': string;
  Relation: string;
  Time: number;
  Calls: number;
}

export interface IPlanStats {
  executionTime?: number;
  planningTime?: number;
  maxRows?: number;
  maxCost?: number;
  maxDuration?: number;
  maxBlocks?: IBlocksStats;
  triggers?: ITrigger[];
  jitTime?: number;
  settings?: { [key: string]: string };
}

export type IBlocksStats = {
  [key in BufferLocation]: number;
};
