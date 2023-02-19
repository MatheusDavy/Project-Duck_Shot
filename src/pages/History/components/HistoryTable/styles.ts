import styled from "styled-components";

export const TableContainer = styled.table`
  width: 90%;
  max-width: 1180px;
  margin: 30px auto;
  border-collapse: collapse;

  th {
    background-color: rgba(000, 000, 000, 0.4);
    padding: 1rem;
    text-align: left;
    color: white;
    font-size: 0.875rem;
    line-height: 1.6;
    margin-bottom: 30px;

    &:first-child {
      border-top-left-radius: 8px;
      padding-left: 1.5rem;
    }
    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
    }
  }
`;
interface TdContainerProps {
  mode?: 'Easy' | "Medium" | "Hard"
}
export const TdContainer = styled.td<TdContainerProps>`
  background-color: rgba(000, 000, 000, 0.4);
  border-top: 2px solid gray;
  padding: 1rem;
  font-size: 0.875rem;
  line-height: 1.6;
  color: white;
  font-weight: 300;

  

  &:first-child {
    padding-left: 1.5rem;
    width: 50%;
  }
  &:nth-child(2){
    color: ${(props) => {
      if(props.mode === 'Easy'){
        return '#04AA6D'
      } else if(props.mode === 'Medium'){
        return 'yellow'
      } else if(props.mode === 'Hard'){
        return '#ff6767'
      }
    }};
  }
  &:last-child {
    padding-right: 1.5rem;
  }
`;
