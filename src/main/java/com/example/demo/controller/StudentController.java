package com.example.demo.controller;

import com.example.demo.entity.Student;
import com.example.demo.service.StudentService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/v1/student")
@RestController
public class StudentController {
    private StudentService studentService;


    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    // handler methods

    /**
     * Listing all students
     */
    @GetMapping("/all")
    public List<Student> listStudents() {
        return studentService.getAllStudents();
    }
}
