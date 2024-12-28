// QualityCards.tsx
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: nowrap; /* Prevents cards from wrapping to the next line */
  gap: 20px;
  overflow-x: hidden; /* Hides horizontal scroll indication */
  padding: 20px;

  /* Add smooth scrolling effect */
  scroll-behavior: smooth;

  /* To allow scrolling via mouse wheel and swipe on touch devices */
  -webkit-overflow-scrolling: touch;
`;

const Card = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  flex: 0 0 auto; /* Ensures the cards don't shrink or grow */
  padding: 20px;
  text-align: left;
  overflow: hidden; /* Ensures content stays inside */
  white-space: normal; /* Allows text to wrap */
  word-wrap: break-word; /* Breaks long words to avoid overflow */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Adds transition for transform and shadow */

  &:hover {
    transform: scale(1.05); /* Slightly enlarge the card on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Enhance shadow on hover */
  }
`;

const CardTitle = styled.h3`
  margin: 0;
  color: #333;
`;

const CardDescription = styled.p`
  color: #666;
  margin-top: 10px;
  line-height: 1.5;
  overflow: hidden; /* Hides overflowing content */
  text-overflow: ellipsis; /* Adds ellipsis if text overflows */
`;

interface QualityCardProps {
  title: string;
  description: string;
}

const QualityCard: React.FC<QualityCardProps> = ({ title, description }) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
};

const QualityCards: React.FC = () => {
  const qualities = [
    {
      title: 'High Performance',
      description:
        'Our products deliver exceptional performance and reliability, ensuring that you can handle even the most demanding tasks with ease and efficiency over extended periods. The systems have been optimized to maximize output and support heavy workloads seamlessly without downtime.',
    },
    {
      title: 'User-Friendly Design',
      description:
        'Designed with user experience in mind, our interfaces are intuitive, allowing users to navigate seamlessly without a steep learning curve, making interactions smooth and efficient. We prioritize user feedback and iterate to deliver an accessible and efficient experience.',
    },
    {
      title: 'Scalability',
      description:
        'Our solutions are built to grow as your business expands. Whether you need to add more users, features, or scale your operations, our systems adapt without a drop in performance. This ensures your infrastructure is future-proof and cost-effective as you scale up.',
    },
    {
      title: 'High Performance',
      description:
        'Our products deliver exceptional performance and reliability, ensuring that you can handle even the most demanding tasks with ease and efficiency over extended periods. The systems have been optimized to maximize output and support heavy workloads seamlessly without downtime.',
    },
    {
      title: 'User-Friendly Design',
      description:
        'Designed with user experience in mind, our interfaces are intuitive, allowing users to navigate seamlessly without a steep learning curve, making interactions smooth and efficient. We prioritize user feedback and iterate to deliver an accessible and efficient experience.',
    },
    {
      title: 'Scalability',
      description:
        'Our solutions are built to grow as your business expands. Whether you need to add more users, features, or scale your operations, our systems adapt without a drop in performance. This ensures your infrastructure is future-proof and cost-effective as you scale up.',
    },
  ];

  return (
    <CardContainer>
      {qualities.map((quality, index) => (
        <QualityCard key={index} title={quality.title} description={quality.description} />
      ))}
    </CardContainer>
  );
};

export default QualityCards;
