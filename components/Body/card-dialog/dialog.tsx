import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoMdOpen } from "react-icons/io";
import { FaCat } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function MainDialog(data: any) {
  const format =
    data.data.age > 1
      ? `${data.data.age} ${data.data.ageDate}s`
      : `${data.data.age} ${data.data.ageDate}`;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className="bg-accent text-white">
          <IoMdOpen />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex flex-row">
            <span className="mr-2 text-accent">
              {data.data.animalType == "Dog" ? <FaDog /> : <FaCat />}
            </span>
            <span>{data.data.name}</span>
          </DialogTitle>
        </DialogHeader>
        <div>
          <Image
            src={data.data.image}
            alt={data.data.type}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto", borderRadius: "20px" }}
          />
        </div>
        {/* <DialogDescription>
          <Badge>{format}</Badge>
        </DialogDescription> */}
        <div>
          <Badge>{format}</Badge>
        </div>
        <DialogFooter>
          <a
            href={`https://wellingtonspca.co.za/up-for-adoption/dogs/${data.data.name}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-accent text-white font-bold">Contact</Button>
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
