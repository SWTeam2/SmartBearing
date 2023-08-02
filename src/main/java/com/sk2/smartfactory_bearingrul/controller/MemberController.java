package com.sk2.smartfactory_bearingrul.controller;

//import com.sk2.smartfactory_bearingrul.mapper.MemberMapper;
import com.sk2.smartfactory_bearingrul.repository.EmployeeRepository;
//import com.sk2.smartfactory_bearingrul.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class MemberController {

    private final EmployeeRepository employeeRepository;
//    private final MemberService memberService;
//    private final MemberMapper memberMapper;

    @Autowired
    public MemberController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
//        this.memberService = memberService;
//        this.memberMapper = memberMapper;
    }

    @PostMapping("/signup/check-employee")
    public boolean checkRegistration(@RequestBody Map<String, String> requestData) {
        String employeeId = requestData.get("employeeId");
        String email = requestData.get("email");

        return employeeRepository.existsByEmployeeIdAndEmail(employeeId, email);
    }
//    @PostMapping
//    public ResponseEntity postMember(
//            @RequestBody @Valid MemberPostDto memberPostDto
//    ) {
//        Employee saveUser = memberService.createMember(
//                memberMapper.memberPostDtoToEntity(memberPostDto));
//        return new ResponseEntity<>(
//                ResponseDto.of(
//                        memberMapper.entityToUserResponseDto(
//                                saveUser
//                        )),
//                HttpStatus.CREATED
//        );
//    }

//    @GetMapping("/{employeeId}")
//    public ResponseEntity getMember(
//            @PathVariable String employeeId
//    ) {
//        return new ResponseEntity<>(
//                ResponseDto.of(
//                        memberMapper.entityToUserResponseDto(
//                                memberService.getMember(employeeId)
//                        )),
//                HttpStatus.OK);
//    }

}
