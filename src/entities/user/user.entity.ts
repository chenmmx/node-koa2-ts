import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()

export class User {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column()
  username!: string;

  @Column()
  password!: string;

  @CreateDateColumn()
  createTime!: Date;

  @UpdateDateColumn()
  updateTime!: Date;
}
