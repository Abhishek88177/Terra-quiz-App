package com.terraquiz.service;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.terraquiz.model.Question;
import com.terraquiz.repository.QuestionRepository;

@Service
public class QuestionServiceImpl implements QuestionService {
	@Autowired
    private QuestionRepository questionRepository;

	@Override
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

	@Override
    public Question getQuestionById(Integer id) {
        return questionRepository.findById(id).orElse(null);
    }

	@Override
    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }

	@Override
    public Question updateQuestion(Integer id, Question question) {
        if (!questionRepository.existsById(id)) {
            return null;
        }
        question.setId(id);
        return questionRepository.save(question);
    }

	@Override
    public boolean deleteQuestion(Integer id) {
        if (!questionRepository.existsById(id)) {
            return false;
        }
        questionRepository.deleteById(id);
        return true;
    }

	@Override
	public List<Question> getQuestionBySkill(String skill) {
		Map<String,String> map = new TreeMap<String,String>();
		return questionRepository.getByskill(skill) ;
	}

	@Override
	public String getCorrectAnswer(Integer id) {
		// TODO Auto-generated method stub
		Question question = questionRepository.findById(id).orElse(null);
		String answer = question.getCorrectOption();
		
		return answer;
	}
}
