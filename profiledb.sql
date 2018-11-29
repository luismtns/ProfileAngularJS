-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 28-Nov-2018 às 04:04
-- Versão do servidor: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `profiledb`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `ID_USUARIO` int(255) NOT NULL,
  `USER` varchar(255) DEFAULT NULL,
  `EMAIL` varchar(255) NOT NULL,
  `SENHA` varchar(255) NOT NULL,
  `NOME` varchar(255) NOT NULL,
  `SOBRENOME` varchar(255) NOT NULL,
  `NICK` varchar(255) NOT NULL,
  `IDADE` int(100) NOT NULL,
  `PAIS` varchar(255) NOT NULL,
  `CIDADE` varchar(255) NOT NULL,
  `IDIOMA1` varchar(255) NOT NULL,
  `IDIOMA2` varchar(255) NOT NULL,
  `USER_LOL` varchar(255) NOT NULL,
  `TWITTER` varchar(255) NOT NULL,
  `TWITCH` varchar(255) NOT NULL,
  `DISCORD` varchar(255) NOT NULL,
  `YOUTUBE` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`ID_USUARIO`, `USER`, `EMAIL`, `SENHA`, `NOME`, `SOBRENOME`, `NICK`, `IDADE`, `PAIS`, `CIDADE`, `IDIOMA1`, `IDIOMA2`, `USER_LOL`, `TWITTER`, `TWITCH`, `DISCORD`, `YOUTUBE`) VALUES
(3, '$login', '$email', '$senha', '', '', '', 0, '', '', '', '', '', '', '', '', ''),
(4, '$login', '$email', '$senha', '', '', '', 0, '', '', '', '', '', '', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`ID_USUARIO`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `ID_USUARIO` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
