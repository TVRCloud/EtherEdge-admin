import * as React from "react";
import { FiEdit } from "react-icons/fi";
import {
  IoCloseCircleOutline,
  IoTrashOutline,
  IoSaveOutline,
  IoEyeOutline,
} from "react-icons/io5";
import { Button, ButtonProps } from "./button";

export interface ActionButtonProps extends Omit<ButtonProps, "action"> {
  action: "edit" | "delete" | "view" | "save" | "cancel";
  text?: string;
  defaultText?: boolean;
}

const actionConfig: Record<
  ActionButtonProps["action"],
  {
    icon: React.ComponentType<{ size?: number }>;
    iconSize?: number;
    defaultText: string;
    className: string;
  }
> = {
  edit: {
    icon: FiEdit,
    className:
      "text-[#29A2FA] dark:text-white border border-[#29A2FA] hover:border-[#29A2FA]/80 dark:bg-[#1E8ED1] dark:hover:bg-[#1E8ED1]/80",
    defaultText: "Edit",
  },
  delete: {
    icon: IoTrashOutline,
    className:
      "text-[#FF0000] dark:text-white border border-[#FF0000] hover:border-[#FF0000]/80 dark:bg-[#CC0000] dark:hover:bg-[#CC0000]/80",
    defaultText: "Delete",
  },
  view: {
    icon: IoEyeOutline,
    className:
      "text-[#6366F1] dark:text-white border border-[#6366F1] hover:border-[#6366F1]/80 dark:bg-[#4F4CD1] dark:hover:bg-[#4F4CD1]/80",
    defaultText: "View",
  },
  save: {
    icon: IoSaveOutline,
    className:
      "text-[#08B074] dark:text-white border border-[#08B074] hover:border-[#08B074]/80 dark:bg-[#067A5C] dark:hover:bg-[#067A5C]/80",
    defaultText: "Save",
  },
  cancel: {
    icon: IoCloseCircleOutline,
    className:
      "text-[#FA8C25] dark:text-white border border-[#FA8C25] hover:border-[#FA8C25]/80 dark:bg-[#D8701F] dark:hover:bg-[#D8701F]/80",
    defaultText: "Cancel",
  },
};

export const ActionButton = React.forwardRef<
  HTMLButtonElement,
  ActionButtonProps
>(({ action, text, defaultText, children, className, ...props }, ref) => {
  const {
    icon: Icon,
    iconSize,
    className: actionClassName,
    defaultText: configDefaultText,
  } = actionConfig[action];

  return (
    <Button
      ref={ref}
      className={`${actionClassName} ${
        className || ""
      } flex items-center gap-2 rounded-lg p-[8px]`}
      {...props}
    >
      <Icon size={iconSize} />
      {(defaultText ? configDefaultText : text) || children || null}
    </Button>
  );
});

ActionButton.displayName = "ActionButton";
