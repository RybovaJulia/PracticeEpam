package by.rybova.averagemark;

import by.rybova.averagemark.action.AverageMark;
import by.rybova.averagemark.entity.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Julia on 20.09.2017.
 */
public class Main {
    public static void main(String[] args) {
        Map subjects1 = new HashMap<Subject, Integer>();

        subjects1.put(Subject.FAN, 5);
        subjects1.put(Subject.SOCIOLOGY, 9);
        subjects1.put(Subject.GEOMETRY, 7);
        Student student1 = new Student("Кирилл", "Титовец", subjects1);

        Map subjects2 = new HashMap<Subject, Integer>();
        subjects2.put(Subject.FAN, 6);
        subjects2.put(Subject.SOCIOLOGY, 10);
        subjects2.put(Subject.GEOMETRY, 9);
        Student student2 = new Student("Антон", "Бурак", subjects2);

        Map subjects3 = new HashMap<Subject, Integer>();
        subjects3.put(Subject.FAN, 9);
        subjects3.put(Subject.SOCIOLOGY, 5);
        subjects3.put(Subject.GEOMETRY, 6);
        subjects3.put(Subject.ECONOMY, 8);
        Student student3 = new Student("Анна", "Чечуха", subjects3);

        Map subjects4 = new HashMap<Subject, Integer>();
        subjects4.put(Subject.TOPOLOGY, 5);
        subjects4.put(Subject.IT, 8);
        subjects4.put(Subject.GEOMETRY, 6);
        Student student4 = new Student("Наташа", "Евпак", subjects4);

        Map subjects5 = new HashMap<Subject, Integer>();
        subjects5.put(Subject.TOPOLOGY, 9);
        subjects5.put(Subject.IT, 10);
        subjects5.put(Subject.GEOMETRY, 7);
        subjects5.put(Subject.WEB, 9);
        Student student5 = new Student("Ксюша", "Лихута", subjects5);

        Map subjects6 = new HashMap<Subject, Integer>();
        subjects6.put(Subject.TOPOLOGY, 8);
        subjects6.put(Subject.IT, 6);
        subjects6.put(Subject.GEOMETRY, 6);
        subjects6.put(Subject.WEB, 10);
        Student student6 = new Student("Надя", "Фабрикант", subjects6);

        List<Student> studentsgroup9 = new ArrayList<>();
        studentsgroup9.add(student1);
        studentsgroup9.add(student2);
        Group group9 = new Group(9, studentsgroup9);

        List<Student> studentsGroup2 = new ArrayList<>();
        studentsGroup2.add(student3);
        Group group2 = new Group(2, studentsGroup2);

        List<Student> studentsGroup3 = new ArrayList<>();
        studentsGroup3.add(student4);
        studentsGroup3.add(student5);
        studentsGroup3.add(student6);
        Group group3 = new Group(1, studentsGroup3);

        List<Group> groupsFaculty1 = new ArrayList<>();
        groupsFaculty1.add(group9);
        groupsFaculty1.add(group2);
        Faculty faculty1 = new Faculty("ФПМИ", groupsFaculty1);

        List<Group> groupsFaculty2 = new ArrayList<>();
        groupsFaculty2.add(group3);
        Faculty faculty2 = new Faculty("ММФ ", groupsFaculty2);

        List<Faculty> faculties = new ArrayList<>();
        faculties.add(faculty1);
        faculties.add(faculty2);

        University university = new University(faculties);
        System.out.println("Средний балл на факультете " + faculty1.getFacultyName() + ": " + AverageMark.findingByFaculty(faculty1));
        System.out.println("Средний балл у студента " + student1.getFirstName() + " " + student1.getLastName() + " :" + AverageMark.findingByStudent(student1 ));
        System.out.println("Средний балл в группе " + group2.getGroupNumber() + ": " + AverageMark.findingByGroup(group2));

        System.out.println("Средний балл в университете: " + AverageMark.findingByUniversity(university));
        System.out.println("Средний балл по экономике в университете: " + AverageMark.findingByProjectInUniversity(university, Subject.ECONOMY));
        System.out.println("Средний балл по дисциплине 'Аналитическая геометрия' на факультете " + faculty1.getFacultyName() + ": " + AverageMark.findingByProjectInFaculty(faculty1, Subject.GEOMETRY));
        System.out.println("Средний балл по дисциплине 'Функциональный анализ' в группе " + group9.getGroupNumber() + ": " + AverageMark.findingByProjectInGroup(group9, Subject.FAN));
    }
}
