package com.example.demo.service;

import com.example.demo.entity.Student;

import java.util.List;

public interface StudentService {
    // displaying list of all students
    List<Student> getAllStudents();

    // display list by id
    Student getStudentById(Long id);

    Student addStudent(Student student);

    Student updateStudent(Student student, Long id);

    void deleteStudent(Long id);
}
