import {
  Box,
  Button,
  Center,
  Flex,
  Spacer,
  Table,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./MainMenu.module.scss";
import { IoLogoHtml5 } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";

import { Link, NavLink } from "react-router-dom";
import {
  useDeleteProjectMutation,
  useFetchAllProjectsQuery,
} from "../services/projectService";
import MySpinner from "../shared/MySpinner";
import CreateProjectModal from "../widgets/projectModal/CreateProjectModal";
import UpdateProjectModal from "../widgets/projectModal/UpdateProjectModal";
import useAuth from "../hooks/useAuth";
import DZBenefits from "./DZ/DZBenefits";
import Author from "./DZ/Author";
// const data = [1, 2, 3, 4, 5, 6];
const MainMenu = () => {
  // const [fetchAllProjects, resultFetchAllProjects] = useFetchAllProjectsQuery()
  const { data, error, isLoading } = useFetchAllProjectsQuery(
    "/getAllProjectsList"
  );

  const [projectName, setProjectName] = useState("");
  const [info, setInfo] = useState("");
  const [currentProject, setCurrentProject] = useState(null);

  const { auth, setAuth } = useAuth();

  const {
    isOpen: isOpenCreate,
    onOpen: onOpenCreate,
    onClose: onCloseCreate,
  } = useDisclosure();
  const {
    isOpen: isOpenUpdate,
    onOpen: onOpenUpdate,
    onClose: onCloseUpdate,
  } = useDisclosure();

  const createSchemeModal = () => {
    onOpenCreate();
  };
  const updateScheme = (id: string) => {
    const project = data.find((item) => item.id === id);
    setCurrentProject(project);
    onOpenUpdate();
  };

  const [deleteProjectApi, resultDeleteProject] = useDeleteProjectMutation();
  const deleteProject = async (id) => {
    console.log(id);
    await deleteProjectApi({ id });
  };

  return (
    <>
      <header>
        <Box className={styles.headerContainer}>
          <Flex className={styles.header}>
            <div className={styles.logo}>
              <IoLogoHtml5 />
            </div>

            <h2>Добро пожаловать,{auth?.name} </h2>
            <nav className={styles.nav}>
              <NavLink
                to={`/updateProfile/${auth.id}`}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <div className={styles.navLinkContent}>
                  {" "}
                  Изменить профиль <CiCreditCard1 />
                </div>
              </NavLink>

              <NavLink
                onClick={() => setAuth({})}
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <div className={styles.navLinkContent}>
                  Выйти <CiLogout />
                </div>
              </NavLink>
            </nav>
          </Flex>
        </Box>
      </header>
      <main className={styles.main}>
        {isLoading && <MySpinner />}
        {error && error.error}
        <Box maxWidth={"100rem"} className={styles.projects}>
          {data &&
            data.map((item, index) => (
              <Box key={item.id} className={styles.project}>
                {index + 1}.{item.name}
                <p>{item.info}</p>
                <Box className={styles.actionButtons}>
                  <Link to={`/project/${item.id}`}>
                    <Button color={"blue"}>Перейти </Button>
                  </Link>

                  <Button
                    colorScheme="red"
                    onClick={() => deleteProject(item.id)}
                  >
                    Удалить
                    <MdDelete />
                  </Button>
                  <Button
                    onClick={() => updateScheme(item.id)}
                    colorScheme="yellow"
                  >
                    Изменить информацию об объекте <CiEdit />
                  </Button>
                </Box>
              </Box>
            ))}

          {/* ==============================================🏠 ДЗ 🏠============================================== */}
          {/* <div className={styles.dzTable}>
            <table className={styles.table}>
              <tr className={styles.tableHead}>
                <td>№</td>
                <td>Название</td>
                <td>Доп.инфо</td>
                <td>Действия</td>
              </tr>
              {data &&
                data.map((item, index) => (
                  <tr>
                    <td>
                      <Link to={`/project/${item.id}`}>{index + 1} </Link>
                    </td>

                    <td>{item.name}</td>
                    <td>{item.info}</td>
                    <td>
                      <Button
                        colorScheme="red"
                        onClick={() => deleteProject(item.id)}
                      >
                        Удалить
                        <MdDelete />
                      </Button>
                      <Button
                        onClick={() => updateScheme(item.id)}
                        colorScheme="yellow"
                      >
                        Изменить <CiEdit />
                      </Button>
                    </td>
                  </tr>
                ))}
            </table>

            <div className={styles.toolBar}>
              <Button
                id={styles.dzAddProject}
                colorScheme="green"
                onClick={createSchemeModal}
              >
                +
              </Button>
            </div>
          </div>

          <DZBenefits />
          <Author /> */}
          {/* ==============================================🏠 ДЗ 🏠============================================== */}
        </Box>
      </main>
      <Button
        id={styles.addProject}
        colorScheme="green"
        onClick={createSchemeModal}
      >
        Добавить
      </Button>
      {isOpenCreate && (
        <CreateProjectModal
          projectName={projectName}
          setProjectName={setProjectName}
          info={info}
          setInfo={setInfo}
          isOpen={isOpenCreate}
          onClose={onCloseCreate}
        />
      )}
      {isOpenUpdate && (
        <UpdateProjectModal
          currentProject={currentProject}
          projectName={projectName}
          setProjectName={setProjectName}
          info={info}
          setInfo={setInfo}
          isOpen={isOpenUpdate}
          onClose={onCloseUpdate}
        />
      )}
    </>
  );
};

export default MainMenu;
