import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

describe('AI Automation Validation', () => {
  const rootDir = path.resolve(__dirname, '..', '..');

  describe('CodeRabbit Configuration', () => {
    it('should have .coderabbit.yaml configuration file', () => {
      const configPath = path.join(rootDir, '.coderabbit.yaml');

      expect(fs.existsSync(configPath)).toBe(true);
    });

    it('should have valid CodeRabbit YAML configuration', () => {
      const configPath = path.join(rootDir, '.coderabbit.yaml');
      const configContent = fs.readFileSync(configPath, 'utf-8');

      // Validate required fields exist in the YAML content
      expect(configContent).toBeDefined();
      expect(configContent).toContain('language:');
      expect(configContent).toContain('reviews:');
      expect(configContent).toContain('CodeRabbit');
    });

    it('should have reviews auto_review enabled', () => {
      const configPath = path.join(rootDir, '.coderabbit.yaml');
      const configContent = fs.readFileSync(configPath, 'utf-8');

      expect(configContent).toContain('auto_review:');
      expect(configContent).toContain('enabled: true');
    });
  });

  describe('README Documentation', () => {
    it('should mention AI automation in README', () => {
      const readmePath = path.join(rootDir, 'README.md');
      const readmeContent = fs.readFileSync(readmePath, 'utf-8');

      // Check for AI-related mentions
      expect(readmeContent.toLowerCase()).toContain('ai');
      expect(readmeContent.toLowerCase()).toContain('coderabbit');
    });

    it('should have AI-powered code reviews feature listed', () => {
      const readmePath = path.join(rootDir, 'README.md');
      const readmeContent = fs.readFileSync(readmePath, 'utf-8');

      // Check for specific feature mention
      expect(readmeContent).toContain('AI-powered code reviews');
    });
  });
});
