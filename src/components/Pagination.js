import styled from 'styled-components';
import Link from 'next/link';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
    background: ${(props) => (!props.disabled ? 'orange' : 'lightGrey')};
    pointer-events: ${(props) => (!props.disabled ? 'all' : 'none')};
    cursor: ${(props) => (!props.disabled ? 'pointer' : 'not-allowed')};
`

const PaginationLink = styled.div`
  padding: 10px;
  margin: 1%;
  color: white;
  text-decoration: none;
  border-radius: 5px;
`;

function Pagination({ currentPage, hasMore }) {
  return (
    <PaginationContainer>
      <StyledLink 
        href={`?page=${parseInt(currentPage) - 1}`} disabled={currentPage <= 1}>
        <PaginationLink>Previous</PaginationLink>
      </StyledLink>
      <StyledLink 
        href={`?page=${parseInt(currentPage) + 1}`} disabled={!hasMore}>
        <PaginationLink>Next</PaginationLink>
      </StyledLink>
    </PaginationContainer>
  );
}
export default Pagination;