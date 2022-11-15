import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Title: string

    @Column()
    content: string

    @Column()
    author: string

    @CreateDateColumn()
    creationDate: string

}