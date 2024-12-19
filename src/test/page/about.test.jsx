import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import About from '../../page/about';
import Resume from '../../page/resume';
import SocialMedia from '../../page/socialMedia';

describe('about page', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Routes>
          <Route path="/about" element={<About />}>
            <Route path="resume" element={<Resume />} />
            <Route path="socialMedia" element={<SocialMedia />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
  });

  it('renders nested navigation links by default', () => {
    const links = screen.getAllByRole('link');
    const linkTexts = links.map((link) => link.textContent);

    const expectedTexts = ['Resume', 'SocialMedia'];

    // 檢查每個預期文字是否出現在連結中
    expectedTexts.forEach((text) => {
      expect(linkTexts).toContain(text); // 確保文字存在於連結中
    });
  });

  it('clicks and change to resume page', () => {
    const navContainer = screen.getByRole('link', { name: 'Resume' });
    expect(navContainer).toBeInTheDocument();

    fireEvent.click(navContainer);

    const pageElement = screen.getByText('Resume page');
    expect(pageElement).toBeInTheDocument();
  });

  it('clicks and change to socialMedia page', () => {
    const navContainer = screen.getByRole('link', { name: 'SocialMedia' });
    expect(navContainer).toBeInTheDocument();

    fireEvent.click(navContainer);

    const pageElement = screen.getByText('SocialMedia page');
    expect(pageElement).toBeInTheDocument();
  });
});
