package com.terraquiz.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.terraquiz.model.Question;

public interface QuestionRepository extends JpaRepository<Question, Integer>{

  List<Question>getByskill(String skill);
}
