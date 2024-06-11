import { useState } from "react";
import { Pagination } from "../../components/Pagination";
import { TaskCard, TaskDataTypes } from "../../components/TaskCard";
import { useQueryTasks } from "../../hooks/useQueryTasks";
import { Container } from "./styles";
import { ModalTaskDetails } from "../../components/ModalTaskDetails";

export function Tasks() {
  const [showModal, setShowModal] = useState(false)
  const [taskDetails, setTaskDetails] = useState({} as TaskDataTypes)

  function toggleModal() {
    setShowModal((prevValue) => (prevValue == true ? false : true))
  }

  function addTaskDetails(task: TaskDataTypes) {
    setTaskDetails(task)
    toggleModal()
  }
  
  const {
    data,
    page,
    changeLimit,
    changePage,
    nextPage,
    prevPage,
    totalPages,
    isLoading,
    error,
  } = useQueryTasks();

  if (totalPages > 0 && page > totalPages) {
    changePage(totalPages);
  }

  return (
    <Container>
      <div className="headPageTasks">
        <h2>Lista</h2>

        <div className="paginationDesktop">
          <Pagination
            page={page}
            step={5}
            changeLimit={changeLimit}
            nextPage={nextPage}
            prevPage={prevPage}
            totalPages={totalPages}
          />
        </div>
      </div>

      {isLoading && <span className="loading">Carregando...</span>}
      {!isLoading && error && <span className="loading">Erro...</span>}

      <div className="tasksContainer">
        {data?.length == 0 ? (
          <p className="loading">Sem tarefas para mostrar</p>
        ) : (
          data?.map((task) => {
            return (<TaskCard data={task} key={task.id} onClick={() => addTaskDetails(task)} />
          )})
        )}
      </div>

      <div className="paginationMobile">
        <Pagination
          page={page}
          step={5}
          changeLimit={changeLimit}
          nextPage={nextPage}
          prevPage={prevPage}
          totalPages={totalPages}
        />
      </div>
      {showModal && <ModalTaskDetails task={taskDetails} toggleModal={toggleModal} />}
    </Container>
  );
}
