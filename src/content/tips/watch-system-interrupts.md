---
title: "Watch System Interrupts in Real-Time"
description: "Monitor system IRQs with live updates and change highlighting"
date: 2024-06-02
tags: ["linux", "monitoring", "cli"]
---

## The Command

Monitor system interrupt requests in real-time:

```bash
watch -n1 -d cat /proc/interrupts
```

## What This Does

- **`watch -n1`**: Refresh every 1 second
- **`-d`**: Highlight changes between updates
- **`/proc/interrupts`**: Kernel file showing IRQ statistics

## Example Output

```
           CPU0       CPU1       CPU2       CPU3
  0:         34          0          0          0   IO-APIC    timer
  1:          2          0          0          0   IO-APIC    i8042
  8:          1          0          0          0   IO-APIC    rtc0
  9:          0          0          0          0   IO-APIC    acpi
 12:          4          0          0          0   IO-APIC    i8042
```
