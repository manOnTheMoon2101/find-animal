import * as React from "react";
import types from "@/utils/typeFormat.json";
import { FaCat } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MainDialog } from "../card-dialog/dialog";
import formatDate from "@/utils/dateFormat";

export function MainCard(props: any) {
  const matchedType = types.find((x: any) => x.type === props.type);

  const format =
    props.age > 1
      ? `${props.age} ${props.ageDate}s`
      : `${props.age} ${props.ageDate}`;
  return (
    <Card className="w-[350px] bg-background drop-shadow-xl">
      <CardHeader>
        <CardTitle className="flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <span className="mr-2 text-accent">
              {props.animalType == "Dog" ? <FaDog /> : <FaCat />}
            </span>
            <span>{props.name}</span>
          </div>
          <Badge className="bg-primary">{format}</Badge>
        </CardTitle>
        <CardDescription>
          {matchedType ? matchedType.name : "Unknown"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={props.image}
          alt="images"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", borderRadius: "20px" }}
        />
      </CardContent>
      <CardFooter className="flex justify-between items-baseline">
        <Badge className="bg-white"> {formatDate(props.date)}</Badge>
        <MainDialog data={props} />
      </CardFooter>
    </Card>
  );
}
