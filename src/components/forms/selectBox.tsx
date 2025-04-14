import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectBoxProps {
  placeholder: string;
  label?: string;
  options: { value: string; label: string }[];
  className?: string;
}

export default function SelectBox({
  placeholder,
  options,
  className,
}: SelectBoxProps) {
  return (
    <div className={`w-full ${className}`}>
      <Select>
        <SelectTrigger className="w-full bg-white border-gray-200 h-11 rounded focus:ring-2 focus:ring-primary/20">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-white border-gray-200 rounded-lg shadow-lg">
          <SelectGroup>
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="cursor-pointer hover:bg-gray-50"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
