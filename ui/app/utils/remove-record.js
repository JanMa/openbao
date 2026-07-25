/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// Unloads a record from the store safely.
// In ember-data 4.12, pushing a record with empty relationships to clear
// them before unload causes record corruption in the graph system.
// unloadRecord handles relationship cleanup automatically.
export default function removeRecord(store, record) {
  try {
    store.unloadRecord(record);
  } catch {
    // record may already be destroyed
  }
}
