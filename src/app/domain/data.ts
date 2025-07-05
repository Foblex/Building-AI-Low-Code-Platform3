import {IStorageNode} from './i-storage-node';

export const DATA: IStorageNode[] = [
  {
    name: "Start",
    icon: "link",
    shortDescription: "Start: incoming request",
    inputs: [],
    outputs: ["any"]
  },
  {
    name: "AI Parser",
    icon: "code_blocks",
    shortDescription: "Extract JSON fields",
    inputs: ["any"],
    outputs: ["success", "failure"]
  },
  {
    name: "Retry Loop",
    icon: "repeat",
    shortDescription: "Repeat for each item",
    inputs: ["any"],
    outputs: ["any"]
  },
  {
    name: "AI Validator",
    icon: "check_circle",
    shortDescription: "AI data checker",
    inputs: ["parsed", "retry"],
    outputs: ["valid", "invalid"]
  },
  {
    name: "AI Executor",
    icon: "psychology",
    shortDescription: "AI-powered action",
    inputs: ["valid"],
    outputs: ["done"]
  },
  {
    name: "If-Else",
    icon: "fork_right",
    shortDescription: "Conditional branching",
    inputs: ["any"],
    outputs: ["true", "false"]
  },
  {
    name: "Error Handler",
    icon: "error",
    shortDescription: "Error management",
    inputs: ["any"],
    outputs: []
  },
  {
    name: "Logger",
    icon: "terminal",
    shortDescription: "Flow logging",
    inputs: ["any"],
    outputs: []
  }
]
