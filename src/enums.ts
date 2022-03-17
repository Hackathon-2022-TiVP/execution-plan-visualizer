/**
 * Predefined enums.
 */

export enum Metric {
  time,
  rows,
  cost,
  buffers,
  estimate_factor,
}

export enum BufferLocation {
  shared = 'Shared',
  temp = 'Temp',
  local = 'Local',
}

export enum BufferType {
  hit = 'Hit',
  read = 'Read',
  written = 'Written',
  dirtied = 'Dirtied',
}

export class HighlightType {
  public static NONE: string = 'none';
  public static DURATION: string = 'duration';
  public static ROWS: string = 'rows';
  public static COST: string = 'cost';
}

export enum EstimateDirection {
  over = 1,
  under = 2,
  none = 3,
}

export class ViewMode {
  public static FULL: string = 'full';
  public static COMPACT: string = 'compact';
  public static DOT: string = 'dot';
}

export class Orientation {
  public static TWOD: string = 'twod';
  public static CLASSIC: string = 'classic';
}

export enum CenterMode {
  center,
  visible,
  none,
}

export enum HighlightMode {
  flash = 1,
  highlight = 2,
  showdetails = 4,
}

export enum NodeProp {
  // plan property keys
  NODE_TYPE = 'Node Type',
  ACTUAL_ROWS = 'Actual Rows',
  PLAN_ROWS = 'Plan Rows',
  PLAN_WIDTH = 'Plan Width',
  ROWS_REMOVED_BY_FILTER = 'Rows Removed by Filter',
  ROWS_REMOVED_BY_JOIN_FILTER = 'Rows Removed by Join Filter',
  ACTUAL_STARTUP_TIME = 'Actual Startup Time',
  ACTUAL_TOTAL_TIME = 'Actual Total Time',
  ACTUAL_LOOPS = 'Actual Loops',
  STARTUP_COST = 'Startup Cost',
  TOTAL_COST = 'Total Cost',
  PLANS = 'Plans',
  RELATION_NAME = 'Relation Name',
  SCHEMA = 'Schema',
  ALIAS = 'Alias',
  GROUP_KEY = 'Group Key',
  SORT_KEY = 'Sort Key',
  SORT_METHOD = 'Sort Method',
  SORT_SPACE_TYPE = 'Sort Space Type',
  SORT_SPACE_USED = 'Sort Space Used',
  JOIN_TYPE = 'Join Type',
  INDEX_NAME = 'Index Name',
  HASH_CONDITION = 'Hash Cond',
  PARENT_RELATIONSHIP = 'Parent Relationship',
  SUBPLAN_NAME = 'Subplan Name',
  PARALLEL_AWARE = 'Parallel Aware',
  WORKERS = 'Workers',
  WORKERS_PLANNED = 'Workers Planned',
  WORKERS_LAUNCHED = 'Workers Launched',
  SHARED_HIT_BLOCKS = 'Shared Hit Blocks',
  SHARED_READ_BLOCKS = 'Shared Read Blocks',
  SHARED_DIRTIED_BLOCKS = 'Shared Dirtied Blocks',
  SHARED_WRITTEN_BLOCKS = 'Shared Written Blocks',
  TEMP_READ_BLOCKS = 'Temp Read Blocks',
  TEMP_WRITTEN_BLOCKS = 'Temp Written Blocks',
  LOCAL_HIT_BLOCKS = 'Local Hit Blocks',
  LOCAL_READ_BLOCKS = 'Local Read Blocks',
  LOCAL_DIRTIED_BLOCKS = 'Local Dirtied Blocks',
  LOCAL_WRITTEN_BLOCKS = 'Local Written Blocks',
  IO_READ_TIME = 'I/O Read Time',
  IO_WRITE_TIME = 'I/O Write Time',
  OUTPUT = 'Output',
  HEAP_FETCHES = 'Heap Fetches',
  WAL_RECORDS = 'WAL Records',
  WAL_BYTES = 'WAL Bytes',
  WAL_FPI = 'WAL FPI',
  FULL_SORT_GROUPS = 'Full-sort Groups',
  PRE_SORTED_GROUPS = 'Pre-sorted Groups',
  PRESORTED_KEY = 'Presorted Key',

  // Computed Properties.
  NODE_ID = 'nodeId',
  EXCLUSIVE_DURATION = '*Duration (exclusive)',
  EXCLUSIVE_COST = '*Cost (exclusive)',
  ACTUAL_ROWS_REVISED = '*Actual Rows Revised',
  PLAN_ROWS_REVISED = '*Plan Rows Revised',
  ROWS_REMOVED_BY_FILTER_REVISED = '*Rows Removed by Filter',
  ROWS_REMOVED_BY_JOIN_FILTER_REVISED = '*Rows Removed by Join Filter',

  PLANNER_ESTIMATE_FACTOR = '*Planner Row Estimate Factor',
  PLANNER_ESTIMATE_DIRECTION = '*Planner Row Estimate Direction',

  EXCLUSIVE_SHARED_HIT_BLOCKS = '*Shared Hit Blocks (exclusive)',
  EXCLUSIVE_SHARED_READ_BLOCKS = '*Shared Read Blocks (exclusive)',
  EXCLUSIVE_SHARED_DIRTIED_BLOCKS = '*Shared Dirtied Blocks (exclusive)',
  EXCLUSIVE_SHARED_WRITTEN_BLOCKS = '*Shared Written Blocks (exclusive)',
  EXCLUSIVE_TEMP_READ_BLOCKS = '*Temp Read Blocks (exclusive)',
  EXCLUSIVE_TEMP_WRITTEN_BLOCKS = '*Temp Written Blocks (exclusive)',
  EXCLUSIVE_LOCAL_HIT_BLOCKS = '*Local Hit Blocks (exclusive)',
  EXCLUSIVE_LOCAL_READ_BLOCKS = '*Local Read Blocks (exclusive)',
  EXCLUSIVE_LOCAL_DIRTIED_BLOCKS = '*Local Dirtied Blocks (exclusive)',
  EXCLUSIVE_LOCAL_WRITTEN_BLOCKS = '*Local Written Blocks (exclusive)',

  EXCLUSIVE_IO_READ_TIME = '*I/O Read Time (exclusive)',
  EXCLUSIVE_IO_WRITE_TIME = '*I/O Write Time (exclusive)',

  WORKERS_PLANNED_BY_GATHER = '*Workers Planned By Gather',

  CTE_SCAN = 'CTE Scan',
  CTE_NAME = 'CTE Name',
  FUNCTION_NAME = 'Function Name',

  ARRAY_INDEX_KEY = 'arrayIndex',

  PLAN_TAG = 'plan_',
}

// Returns the list of properties that have already been displayed either in
// the main panel or in other detailed tabs.
export const notMiscProperties: string[] = [
  NodeProp.NODE_TYPE,
  NodeProp.CTE_NAME,
  NodeProp.EXCLUSIVE_DURATION,
  NodeProp.EXCLUSIVE_COST,
  NodeProp.TOTAL_COST,
  NodeProp.PLAN_ROWS,
  NodeProp.ACTUAL_ROWS,
  NodeProp.ACTUAL_LOOPS,
  NodeProp.OUTPUT,
  NodeProp.WORKERS,
  NodeProp.WORKERS_PLANNED,
  NodeProp.WORKERS_LAUNCHED,
  NodeProp.EXCLUSIVE_SHARED_HIT_BLOCKS,
  NodeProp.EXCLUSIVE_SHARED_READ_BLOCKS,
  NodeProp.EXCLUSIVE_SHARED_DIRTIED_BLOCKS,
  NodeProp.EXCLUSIVE_SHARED_WRITTEN_BLOCKS,
  NodeProp.EXCLUSIVE_TEMP_READ_BLOCKS,
  NodeProp.EXCLUSIVE_TEMP_WRITTEN_BLOCKS,
  NodeProp.EXCLUSIVE_LOCAL_HIT_BLOCKS,
  NodeProp.EXCLUSIVE_LOCAL_READ_BLOCKS,
  NodeProp.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS,
  NodeProp.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS,
  NodeProp.SHARED_HIT_BLOCKS,
  NodeProp.SHARED_READ_BLOCKS,
  NodeProp.SHARED_DIRTIED_BLOCKS,
  NodeProp.SHARED_WRITTEN_BLOCKS,
  NodeProp.TEMP_READ_BLOCKS,
  NodeProp.TEMP_WRITTEN_BLOCKS,
  NodeProp.LOCAL_HIT_BLOCKS,
  NodeProp.LOCAL_READ_BLOCKS,
  NodeProp.LOCAL_DIRTIED_BLOCKS,
  NodeProp.LOCAL_WRITTEN_BLOCKS,
  NodeProp.PLANNER_ESTIMATE_FACTOR,
  NodeProp.PLANNER_ESTIMATE_DIRECTION,
  NodeProp.SUBPLAN_NAME,
  NodeProp.GROUP_KEY,
  NodeProp.HASH_CONDITION,
  NodeProp.JOIN_TYPE,
  NodeProp.INDEX_NAME,
  NodeProp.HASH_CONDITION,
  NodeProp.EXCLUSIVE_IO_READ_TIME,
  NodeProp.EXCLUSIVE_IO_WRITE_TIME,
  NodeProp.IO_READ_TIME, // Exclusive value already shown in IO tab
  NodeProp.IO_WRITE_TIME, // Exclusive value already shown in IO tab
  NodeProp.HEAP_FETCHES,
  NodeProp.WAL_RECORDS,
  NodeProp.WAL_BYTES,
  NodeProp.WAL_FPI,
  NodeProp.NODE_ID,
  NodeProp.ROWS_REMOVED_BY_FILTER,
  NodeProp.ROWS_REMOVED_BY_JOIN_FILTER,
  NodeProp.ACTUAL_ROWS_REVISED,
  NodeProp.PLAN_ROWS_REVISED,
  NodeProp.ROWS_REMOVED_BY_FILTER_REVISED,
  NodeProp.ROWS_REMOVED_BY_JOIN_FILTER_REVISED,
];

export enum PropType {
  blocks,
  boolean,
  bytes,
  cost,
  duration,
  estimateDirection,
  factor,
  increment,
  json,
  kilobytes,
  list,
  loops,
  rows,
  sortGroups,
}

export const nodePropTypes: any = {};

nodePropTypes[NodeProp.ACTUAL_ROWS] = PropType.rows;
nodePropTypes[NodeProp.ACTUAL_LOOPS] = PropType.loops;
nodePropTypes[NodeProp.PLAN_ROWS] = PropType.rows;
nodePropTypes[NodeProp.PLAN_WIDTH] = PropType.bytes;
nodePropTypes[NodeProp.ACTUAL_ROWS_REVISED] = PropType.rows;
nodePropTypes[NodeProp.PLAN_ROWS_REVISED] = PropType.rows;
nodePropTypes[NodeProp.ACTUAL_TOTAL_TIME] = PropType.duration;
nodePropTypes[NodeProp.ACTUAL_STARTUP_TIME] = PropType.duration;
nodePropTypes[NodeProp.STARTUP_COST] = PropType.cost;
nodePropTypes[NodeProp.TOTAL_COST] = PropType.cost;
nodePropTypes[NodeProp.PARALLEL_AWARE] = PropType.boolean;
nodePropTypes[NodeProp.WORKERS] = PropType.json;
nodePropTypes[NodeProp.SORT_SPACE_USED] = PropType.kilobytes;
nodePropTypes[NodeProp.ROWS_REMOVED_BY_FILTER] = PropType.rows;
nodePropTypes[NodeProp.ROWS_REMOVED_BY_JOIN_FILTER] = PropType.rows;
nodePropTypes[NodeProp.ROWS_REMOVED_BY_FILTER_REVISED] = PropType.rows;
nodePropTypes[NodeProp.ROWS_REMOVED_BY_JOIN_FILTER_REVISED] = PropType.rows;
nodePropTypes[NodeProp.HEAP_FETCHES] = PropType.rows;
nodePropTypes[NodeProp.OUTPUT] = PropType.list;
nodePropTypes[NodeProp.SORT_KEY] = PropType.list;
nodePropTypes[NodeProp.PRESORTED_KEY] = PropType.list;
nodePropTypes[NodeProp.WAL_RECORDS] = PropType.rows;
nodePropTypes[NodeProp.WAL_BYTES] = PropType.bytes;
nodePropTypes[NodeProp.WAL_FPI] = PropType.rows;

nodePropTypes[NodeProp.EXCLUSIVE_DURATION] = PropType.duration;
nodePropTypes[NodeProp.EXCLUSIVE_COST] = PropType.cost;

nodePropTypes[NodeProp.PLANNER_ESTIMATE_FACTOR] = PropType.factor;
nodePropTypes[NodeProp.PLANNER_ESTIMATE_DIRECTION] = PropType.estimateDirection;

nodePropTypes[NodeProp.IO_READ_TIME] = PropType.duration;
nodePropTypes[NodeProp.IO_WRITE_TIME] = PropType.duration;

nodePropTypes[NodeProp.EXCLUSIVE_IO_READ_TIME] = PropType.duration;
nodePropTypes[NodeProp.EXCLUSIVE_IO_WRITE_TIME] = PropType.duration;

nodePropTypes[NodeProp.EXCLUSIVE_SHARED_HIT_BLOCKS] = PropType.blocks;
nodePropTypes[NodeProp.EXCLUSIVE_SHARED_READ_BLOCKS] = PropType.blocks;
nodePropTypes[NodeProp.EXCLUSIVE_SHARED_DIRTIED_BLOCKS] = PropType.blocks;
nodePropTypes[NodeProp.EXCLUSIVE_SHARED_WRITTEN_BLOCKS] = PropType.blocks;
nodePropTypes[NodeProp.EXCLUSIVE_TEMP_READ_BLOCKS] = PropType.blocks;
nodePropTypes[NodeProp.EXCLUSIVE_TEMP_WRITTEN_BLOCKS] = PropType.blocks;
nodePropTypes[NodeProp.EXCLUSIVE_LOCAL_HIT_BLOCKS] = PropType.blocks;
nodePropTypes[NodeProp.EXCLUSIVE_LOCAL_READ_BLOCKS] = PropType.blocks;
nodePropTypes[NodeProp.EXCLUSIVE_LOCAL_DIRTIED_BLOCKS] = PropType.blocks;
nodePropTypes[NodeProp.EXCLUSIVE_LOCAL_WRITTEN_BLOCKS] = PropType.blocks;

nodePropTypes[NodeProp.FULL_SORT_GROUPS] = PropType.sortGroups;
nodePropTypes[NodeProp.PRE_SORTED_GROUPS] = PropType.sortGroups;

export class WorkerProp {
  // plan property keys
  public static WORKER_NUMBER: string = 'Worker Number';
}

nodePropTypes[WorkerProp.WORKER_NUMBER] = PropType.increment;

export enum SortGroupsProp {
  GROUP_COUNT = 'Group Count',
  SORT_METHODS_USED = 'Sort Methods Used',
  SORT_SPACE_MEMORY = 'Sort Space Memory',
}

export enum SortSpaceMemory {
  AVERAGE_SORT_SPACE_USED = 'Average Sort Space Used',
  PEAK_SORT_SPACE_USED = 'Peak Sort Space Used',
}