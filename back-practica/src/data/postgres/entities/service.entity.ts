import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Device } from "./device.entity";
import { Contract } from "./contract.entity";

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  servicename: string;

  @Column({ length: 150 })
  servicedescription: string;

  @Column({ length: 10 })
  price: string;

  /**
   *
   */
  @OneToMany(() => Device, (device) => device.service)
  devices: Device[];

  /**
   *
   */

  @OneToMany(() => Contract, (contract) => contract.service)
  contracts: Contract[];
}
