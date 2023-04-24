import styled from 'styled-components';
import Link from 'next/link';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PaginationLink = styled.div`
  padding: 10px;
  margin: 1%;
  background: ${(props) => (!props.disabled ? 'orange' : 'lightGrey')};
  pointer-events:${(props) => (!props.disabled ? 'all' : "none")}; 
  cursor: ${(props) => (!props.disabled ? 'pointer' : 'not-allowed')};
  color: white;
  text-decoration: none;
  border-radius: 5px;
`;

function Pagination({ currentPage, hasMore }) {
  return (
    <PaginationContainer>
      <Link 
        href={`?page=${parseInt(currentPage) - 1}`}>
        <PaginationLink>Previous</PaginationLink>
      </Link>
      <Link 
        href={`?page=${parseInt(currentPage) + 1}`}>
        <PaginationLink>Next</PaginationLink>
      </Link>
    </PaginationContainer>
  );
}
export default Pagination;