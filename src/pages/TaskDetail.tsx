// pages/TaskDetail.jsx
import { useParams } from 'react-router-dom';

export default function TaskDetail() {
  const { id } = useParams();
  return <h1>Task Detail: {id}</h1>;
}
