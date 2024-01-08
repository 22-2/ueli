import { Button, Input, Tooltip } from "@fluentui/react-components";
import { AddRegular, DismissRegular, FolderRegular } from "@fluentui/react-icons";
import { useState } from "react";
import { useContextBridge } from "../../../../../Hooks";
import { useExtensionSetting } from "../../../../../Hooks/useExtensionSetting";
import { Section } from "../../../../Section";
import { SectionList } from "../../../../SectionList";

export const MacOsSettings = () => {
    const { contextBridge } = useContextBridge();

    const extensionId = "ApplicationSearch";
    const settingKey = "macOsFolders";
    const defaultValue = contextBridge.getExtensionSettingDefaultValue<string[]>(extensionId, settingKey);

    const [newValue, setNewValue] = useState<string>("");

    const { value, updateValue } = useExtensionSetting(extensionId, settingKey, defaultValue);

    const removeFolder = (indexToRemove: number) => {
        updateValue(value.filter((_, index) => index !== indexToRemove));
    };

    const addFolder = () => {
        if (newValue.trim().length) {
            updateValue([...value, newValue]);
            setNewValue("");
        }
    };

    const chooseFolder = async () => {
        const result = await contextBridge.showOpenDialog({ properties: ["openDirectory"] });
        if (!result.canceled && result.filePaths.length) {
            setNewValue(result.filePaths[0]);
        }
    };

    return (
        <SectionList>
            <Section>
                <label id={settingKey}>Application Folders</label>
                {value.map((v, index) => (
                    <Input
                        key={`macOsFolder-${v}`}
                        value={v}
                        readOnly
                        size="small"
                        contentAfter={
                            <Tooltip content="Remove" relationship="label">
                                <Button
                                    appearance="subtle"
                                    size="small"
                                    icon={<DismissRegular fontSize={14} onClick={() => removeFolder(index)} />}
                                />
                            </Tooltip>
                        }
                    />
                ))}
                <Input
                    size="small"
                    value={newValue}
                    onChange={(_, { value }) => setNewValue(value)}
                    contentAfter={
                        <>
                            <Tooltip content="Choose folder" relationship="label">
                                <Button
                                    appearance="subtle"
                                    size="small"
                                    icon={<FolderRegular fontSize={14} onClick={chooseFolder} />}
                                />
                            </Tooltip>
                            <Tooltip content="Add" relationship="label">
                                <Button
                                    appearance="subtle"
                                    size="small"
                                    icon={<AddRegular fontSize={14} onClick={addFolder} />}
                                />
                            </Tooltip>
                        </>
                    }
                />
            </Section>
        </SectionList>
    );
};
