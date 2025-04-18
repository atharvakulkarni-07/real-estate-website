import React from 'react';
import './articles.css';

const articlesList = [
  {
    title: "Top 10 Real Estate Trends in 2024",
    description: "Explore the latest trends shaping the real estate market this year.",
    author: "Priya Sharma",
    date: "April 2024",
    link: "#"
  },
  {
    title: "Tips for First-Time Home Buyers",
    description: "Essential advice for making your first property purchase a breeze.",
    author: "Rahul Mehra",
    date: "March 2024",
    link: "#"
  },
  {
    title: "How to Stage Your Home for a Quick Sale",
    description: "Proven strategies to make your home irresistible to buyers.",
    author: "Anjali Verma",
    date: "February 2024",
    link: "#"
  },
  {
    title: "Understanding Home Loan Interest Rates",
    description: "A deep dive into how home loan rates work and how to get the best deal.",
    author: "Vikram Singh",
    date: "January 2024",
    link: "#"
  },
  {
    title: "Smart Renovations That Boost Property Value",
    description: "Renovation ideas that offer the best return on investment.",
    author: "Sonal Gupta",
    date: "December 2023",
    link: "#"
  },
  {
    title: "Legal Essentials for Property Buyers",
    description: "Everything you need to know about legal checks before buying.",
    author: "Amit Joshi",
    date: "November 2023",
    link: "#"
  }
];

const Articles = () => {
  return (
    <section className="articles-wrapper">
      <h2 className="articles-title">In-Depth Articles</h2>
      <p className="articles-description">Stay updated with the latest real estate trends and tips through our articles.</p>

      <div className="articles-list">
        {articlesList.map((article, idx) => (
          <a className="article-card" href={article.link} key={idx} target="_blank" rel="noopener noreferrer">
            <h3>{article.title}</h3>
            <p className="article-desc">{article.description}</p>
            <div className="article-meta">
              <span className="article-author">{article.author}</span>
              <span className="article-date">{article.date}</span>
            </div>
            <span className="article-arrow">&rarr;</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Articles;
