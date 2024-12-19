import { render, fireEvent, screen, within } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Layout from '../../page/layout';
import Home from '../../page/home';
import Blog from '../../page/blog';
import SideProjects from '../../page/sideProjects';
import About from '../../page/about';

describe('layout page', () => {
  beforeEach(() => {
    render(
      // 測試中替代 BrowserRouter，專為測試環境設計。
      // 可透過 initialEntries 模擬初始路徑。
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="sideProjects" element={<SideProjects />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
  });

  it('renders home page by default', () => {
    const pageElement = screen.getByText('Home page');
    expect(pageElement).toBeInTheDocument();
  });

  it('renders navigation links by default', () => {
    const navElement = screen.getByRole('navigation');
    const blogElements = ['Home', 'Blog', 'SideProjects', 'About'];

    blogElements.forEach((item) => {
      // within：將範圍限制在特定容器（例如 <nav>）內部進行搜尋。
      const ele = within(navElement).getByText(item);
      expect(ele).toBeInTheDocument();
    });
  });

  it('clicks and change to blog page', () => {
    const navElement = screen.getByRole('navigation');
    const blogElement = within(navElement).getByText('Blog');
    fireEvent.click(blogElement);
    const pageElement = screen.getByText('Blog page');
    expect(pageElement).toBeInTheDocument();
  });

  it('clicks and change to sideProjects page', () => {
    const navElement = screen.getByRole('navigation');
    const sideProjectsElement = within(navElement).getByText('SideProjects');
    fireEvent.click(sideProjectsElement);
    const pageElement = screen.getByText('SideProjects page');
    expect(pageElement).toBeInTheDocument();
  });
  
  it('clicks and change to about page', () => {
    const navElement = screen.getByRole('navigation');
    const aboutElement = within(navElement).getByText('About');
    fireEvent.click(aboutElement);
    const pageElement = screen.getByText('Resume');
    expect(pageElement).toBeInTheDocument();
  });
});
