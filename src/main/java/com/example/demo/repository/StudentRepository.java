package com.example.demo.repository;

import com.example.demo.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * WE DON'T NEED TO ADD @Repository annotation as JpaRepository already
 * has SimpleJpa Repository implemented.
 */
public interface StudentRepository extends JpaRepository<Student, Long> {

}
