CREATE DATABASE `builds_database` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `builds_database`;

CREATE TABLE `builds` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `builds_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;


CREATE TABLE `gear` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gearname` varchar(45) NOT NULL,
  `type` varchar(45) DEFAULT NULL,
  `ap` int(11) NOT NULL,
  `Accuracy` int(11) NOT NULL,
  `dp` int(11) NOT NULL,
  `evasion` int(11) NOT NULL,
  `damage_reduction` int(11) NOT NULL,
  `hidden_evasion` int(11) NOT NULL,
  `hidden_damage_reduction` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;


CREATE TABLE `build_gear` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gear_id` int(11) DEFAULT NULL,
  `build_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_idx` (`build_id`),
  KEY `id_idx1` (`gear_id`),
  CONSTRAINT `build_id` FOREIGN KEY (`build_id`) REFERENCES `builds` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `gear_id` FOREIGN KEY (`gear_id`) REFERENCES `gear` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;



