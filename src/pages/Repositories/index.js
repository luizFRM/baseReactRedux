import React from 'react';
import Header from '../../components/Header';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import RepositoriesActions from "../../store/ducks/repositories";
import TodosActions from '../../store/ducks/todos';
import OfflineTableActions from '../../store/ducks/offlineTable';

import { Container, TableContainer, TableButton, TableLabel } from './styles';

const Repositories = ({ history, repositories, addRepositoryRequest, todos, addTodoRequest, offlineTable, addOfflineTableRequest }) => (
  <>
    <Header history = {history}/>

    <Container>
      <TableContainer>
        <TableButton onClick={() => addRepositoryRequest("facebook/react")}>
          Add with api (no delay)
        </TableButton>
          {repositories.data.map(repository => (
            <TableContainer style={{display: 'flex', flexDirection: 'column'}}>
              <TableLabel>{repository.name}</TableLabel>
              <TableLabel>{repository.description}</TableLabel>
            </TableContainer>
          ))}
      </TableContainer>

      <TableContainer>
        <TableButton onClick={() => addTodoRequest("todo teste")}>
          add to do (with 10000ms delay)
        </TableButton>
        {todos.data.map(todo => (
          <TableLabel>{todo}</TableLabel>
        ))}

      </TableContainer>

      <TableContainer>
        <TableButton onClick={() => addOfflineTableRequest("table teste")}>
          if online, add a line (online queue)
        </TableButton>   
        {offlineTable.data.map(row => (
          <TableLabel>{row}</TableLabel>
        ))}

      </TableContainer>

    </Container>  
  </>
)
  


const mapStateToProps = state => ({
  repositories: state.repositories,
  todos: state.todos,
  offlineTable: state.offlineTable
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(Object.assign({}, RepositoriesActions, TodosActions, OfflineTableActions), dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repositories);
