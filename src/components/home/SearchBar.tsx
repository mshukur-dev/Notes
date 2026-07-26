import { Moon, Search } from "lucide-react";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "../ui/input-group";

const SearchBar = () => {
    return (
        <div className="flex justify-between items-center">
            <InputGroup className="border-0 max-w-xs">
                <InputGroupAddon>
                    <Search className="size-5" />
                </InputGroupAddon>
                <InputGroupInput
                    className="text-[20px]"
                    placeholder="Search Notes"
                ></InputGroupInput>
            </InputGroup>
            <button type="button" aria-label="Toggle Theme" className="cursor-pointer">
                <Moon className="text-muted" />
            </button>
        </div>
    );
};

export default SearchBar;
