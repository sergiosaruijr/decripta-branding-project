"use client";

import * as React from "react";

type SelectProps = {
  children: React.ReactNode;
  onValueChange?: (value: string) => void;
  value?: string;
  defaultValue?: string;
};

type SelectTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

type SelectContentProps = {
  children: React.ReactNode;
  className?: string;
};

type SelectValueProps = {
  placeholder?: string;
};

type SelectItemProps = {
  value: string;
  children: React.ReactNode;
};

type ParsedSelect = {
  triggerClassName?: string;
  placeholder?: string;
  items: Array<{ value: string; label: React.ReactNode }>;
};

function parseSelectChildren(children: React.ReactNode): ParsedSelect {
  const parsed: ParsedSelect = { items: [] };

  const visit = (node: React.ReactNode) => {
    React.Children.forEach(node, (child) => {
      if (
        !React.isValidElement<{
          className?: string;
          placeholder?: string;
          value?: string;
          children?: React.ReactNode;
        }>(child)
      )
        return;

      if (child.type === SelectTrigger) {
        parsed.triggerClassName = child.props.className as string | undefined;
      }

      if (child.type === SelectValue) {
        parsed.placeholder = child.props.placeholder as string | undefined;
      }

      if (child.type === SelectItem) {
        parsed.items.push({
          value: child.props.value as string,
          label: child.props.children,
        });
      }

      if (child.props?.children) {
        visit(child.props.children);
      }
    });
  };

  visit(children);
  return parsed;
}

export function Select({
  children,
  onValueChange,
  value,
  defaultValue,
}: SelectProps) {
  const { triggerClassName, placeholder, items } =
    parseSelectChildren(children);

  return (
    <select
      className={triggerClassName}
      value={value}
      defaultValue={defaultValue}
      onChange={(event) => onValueChange?.(event.target.value)}
    >
      {placeholder ? (
        <option value="" disabled>
          {placeholder}
        </option>
      ) : null}

      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export function SelectTrigger({ children }: SelectTriggerProps) {
  return <>{children}</>;
}

export function SelectContent({ children }: SelectContentProps) {
  return <>{children}</>;
}

export function SelectValue({ placeholder }: SelectValueProps) {
  return <>{placeholder ?? null}</>;
}

export function SelectItem({ children }: SelectItemProps) {
  return <>{children}</>;
}
