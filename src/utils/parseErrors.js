import React from "react";

export default function parseErrors(err) {
  // check for validation errors
  if (err?.response?.data?.error?.name === "ValidationError") {
    return {
      message: err.response.data.error.message,
      details: err.response.data.error.details.errors,
    };
  }
  if (err?.message === "Network Error") {
    return { message: "Cannot connect to server", details: [] };
  }
  if (err?.response.status === 403) {
    return {
      message: "authorisation required to preform action",
      details: [],
    };
  } else {
    return {
      message: "Unknown error please contact support",
      details: [],
    };
  }
}
