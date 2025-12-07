/**
 * Type-safe portfolio API client
 * Fetches portfolio data from the portfolio-provider API
 */
import type { components } from "../types/portfolio";

/** Portfolio data type from OpenAPI schema */
export type Portfolio = components["schemas"]["Portfolio"];
export type Project = components["schemas"]["Project"];
export type Writing = components["schemas"]["Writing"];
export type About = components["schemas"]["About"];
export type Link = components["schemas"]["Link"];
export type Contact = components["schemas"]["Contact"];

/** API endpoint URL for the portfolio data */
const PORTFOLIO_API_URL =
  "https://nicolas-py.github.io/portfolio-provider/api/portfolio.json";

/**
 * Fetches portfolio data from the API
 * @returns Promise resolving to the complete portfolio data
 * @throws Error if the API request fails
 */
export async function fetchPortfolio(): Promise<Portfolio> {
  const response = await fetch(PORTFOLIO_API_URL);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch portfolio data: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

/**
 * Fetches only the projects from the portfolio
 * @returns Promise resolving to an array of projects
 */
export async function fetchProjects(): Promise<Project[]> {
  const portfolio = await fetchPortfolio();
  return portfolio.projects;
}

/**
 * Fetches only the writing samples from the portfolio
 * @returns Promise resolving to an array of writing samples
 */
export async function fetchWriting(): Promise<Writing[]> {
  const portfolio = await fetchPortfolio();
  return portfolio.writing;
}

/**
 * Fetches only the about information from the portfolio
 * @returns Promise resolving to the about information
 */
export async function fetchAbout(): Promise<About> {
  const portfolio = await fetchPortfolio();
  return portfolio.about;
}
