package com.example.demo.service.impl;

import com.example.demo.entity.Student;
import com.example.demo.repository.StudentRepository;
import com.example.demo.service.StudentService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Student Service Implementation Class.
 */
@Service
public class StudentServiceImpl implements StudentService {

    private StudentRepository studentRepository;

    /**
     * Initilizing studentRepository.
     * @param studentRepository StudentRepository Object.
     */
    public StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student getStudentById(Long id) {
        Optional<Student> op_student = studentRepository.findById(id);
        return op_student.get();
    }

    @Override
    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public Student updateStudent(Student newStudent, Long id) {
        return studentRepository.findById(id)
            .map(student -> {
                student.setFirstname(newStudent.getFirstname());
                student.setLastname(newStudent.getLastname());
                student.setEmail(newStudent.getEmail());
                return studentRepository.save(student);
            })
            .orElseGet(() -> {
                newStudent.setId(id);
                return studentRepository.save(newStudent);
            });
    }

    @Override
    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }
}
