import qs from 'query-string';
import { useLocation } from 'react-router-dom';

export default function About() {
  const { search } = useLocation();
  console.log(search);
  const query = qs.parse(search);
  console.log(query.name);

  return (
    <div>
      <h2>About 페이지입니다.</h2>
      {query.name && <p>name은 {query.name} 입니다.</p>}
    </div>
  );
}
